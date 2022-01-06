import { css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap");

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

  body {
  }

  .container {
    max-width: 900px;
    margin: auto;
    border: 1px solid pink;
    padding: 5px;
  }
  .font-xl {
    font-size: 2.5rem;
  }

  .font-lg {
    font-size: 2rem;
  }

  .font-md {
    font-size: 1.25rem;
  }

  .font-sm {
    font-size: 1.02rem;
  }
`;

export default globalStyles;
