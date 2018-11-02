import * as React from "react";
import addons from "@storybook/addons";
import { highlight } from "highlight.js";
import "highlight.js/styles/github-gist.css";
import styled from "styled-components";

import { KEY } from ".";

export interface Sources {
  template: string;
  component: string;
}

const SourcePanel = styled.div`
  margin: 20px;
`;

const SourcePanelHeader = styled.header`
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  height: 32px;
  padding-left: 12px;
  border-radius: 3px 3px 0 0;
  font-size: 12px;
  background-color: #fff;
  color: #b9b9b9;
  display: flex;
  align-items: center;
`;

const SourceBody = styled.pre`
  margin: 0px;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-radius: 0 0 3px 3px;
`;

export class SourcesPanel extends React.Component<any, SourcesPanel> {
  unmounted: boolean;
  stopListeningOnStory: any;

  state = {
    template: "",
    component: ""
  };

  onAddHello = (sources: Sources) => {
    this.setState(sources);
  };

  componentDidMount() {
    const { channel, api } = this.props;

    channel.on(KEY, this.onAddHello);

    this.stopListeningOnStory = api.onStory(() => {
      this.onAddHello({ template: "", component: "" });
    });
  }

  highlightCode(name: string, str: string) {
    return {
      __html: highlight(name, str).value
    };
  }

  render() {
    const { active } = this.props;
    // const

    return active ? (
      <div>
        <SourcePanel>
          <SourcePanelHeader>Template</SourcePanelHeader>
          <SourceBody>
            <code
              className="language-html hljs"
              dangerouslySetInnerHTML={this.highlightCode(
                "html",
                this.state.template
              )}
            />
          </SourceBody>
        </SourcePanel>
        <SourcePanel>
          <SourcePanelHeader>Component</SourcePanelHeader>
          <SourceBody>
            <code
              className="language-typescript hljs"
              dangerouslySetInnerHTML={this.highlightCode(
                "typescript",
                this.state.component
              )}
            />
          </SourceBody>
        </SourcePanel>
      </div>
    ) : null;
  }

  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener(KEY, this.onAddHello);
  }
}

addons.register(KEY, api => {
  addons.addPanel(`${KEY}/Panel`, {
    title: "Sources",
    render: ({ active }) => (
      <SourcesPanel channel={addons.getChannel()} api={api} active={active} />
    )
  });
});
