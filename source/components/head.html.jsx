const title = "Pablo Vázquez Vidal";
const description = "Full-Stack Developer";
const baseURL = "https://aynik.github.io";

export default () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>
        {title} - {description}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseURL} />
      <meta property="og:title" content={`${title} - ${description}`} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={`${baseURL}/images/profile.png`} />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@this_may_be_it" />
      <meta name="twitter:image" content={`${baseURL}/images/profile.png`} />

      <link rel="canonical" href={baseURL} />

      <link rel="icon" type="image/png" href="/images/favicon.png" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@300&display=swap"
      />
      <link rel="stylesheet" href="/stylesheets/global.css" />

      <script src="/javascripts/tracking.js"></script>
      <script src="/javascripts/global.js"></script>
    </head>
  );
};
