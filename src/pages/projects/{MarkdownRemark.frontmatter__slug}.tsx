import React from "react";
import { graphql } from "gatsby";
import { Markdown, Page } from "../../types/markdown";

export const ProjectPage: React.FC<{ data: Markdown<Page> }> = ({
  data,
}) => {
  const { project } = data;
  const { frontmatter, html } = project;
  const { slug, title, category } = frontmatter;

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>
          <em>{category}</em>
        </p>
      </header>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    project: markdownRemark(id: { eq: $id }, fileAbsolutePath: { regex: "/projects/" }) {
      html
      frontmatter {
        slug
        title
        category
      }
    }
  }
`;

export default ProjectPage;
