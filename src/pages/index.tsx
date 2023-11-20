import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { AllMarkdown, Page } from "../types/markdown";

const IndexPage = () => {
  const content: AllMarkdown<Page> = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            slug
            title
            category
          }
        }
      }
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog-posts/" } }
      ) {
        nodes {
          frontmatter {
            slug
            title
            author
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>Welcome</h1>

      <section>
        <h2>Projects</h2>
        {content.projects.nodes.map((project) => (
          <li key={project.frontmatter.slug}>
            <a href={`/projects/${project.frontmatter.slug}`}>
              {project.frontmatter.title} ({project.frontmatter.category})
            </a>
          </li>
        ))}
      </section>

      <section>
        <h2>Blog posts</h2>
        {content.blogPosts.nodes.map((blogPost) => (
          <li key={blogPost.frontmatter.slug}>
            <a href={`/blog/${blogPost.frontmatter.slug}`}>
              {blogPost.frontmatter.title} by {blogPost.frontmatter.author}
            </a>
          </li>
        ))}
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
