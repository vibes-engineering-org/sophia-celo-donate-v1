import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJzb3BoaWEtY2Vsby1kb25hdGUtdjEudmVyY2VsLmFwcCJ9",
      signature: "MHhhMmE5Y2VjYjI4NDJjYWFjNjZkMGFiNDA3ZGJmM2MxZWI5M2FhMjRkZjAwM2JiNDg3MWY1MTgzOGI4NTZkMzQ1MTdiOTkyZGViYzUyNWFjNzNmNGI1ZDc3MTFiYTc3MGZiNjhmMTcxOGY0ZTg2YzY2NGQwYzQ5ZTE0ZmY1ZTc3NDFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "finance"
    }
  };

  return Response.json(config);
}
