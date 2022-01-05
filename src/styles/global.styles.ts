import { css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Inter";
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 900px;
    margin: auto;
    border: 1px solid pink;
    padding: 5px;
  }
  .font-xl {
    font-size: 1.5rem;
  }

  .font-lg {
    font-size: 1.25rem;
  }

  .font-md {
    font-size: 1.125rem;
  }

  .font-sm {
    font-size: 0.875rem;
  }
`;

export default globalStyles;
