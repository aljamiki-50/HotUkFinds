import mailchimp from "@mailchimp/mailchimp_marketing";

// const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

// console.log("the api",mailchimp.config.api_key);

export async function POST(request) {
  //   console.log("the 2nd api", mailchimp.config.api_key);
  const { email } = await request.json();

  // const { data: session, status, ClientSafeProvider } = useSession();

  // console.log("session is ",session);


  if (!email) {
    return new Response(
      JSON.stringify({ error: "there s no Email been sent here " }),
      { status: 400 }
    );
  }

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    return new Response(JSON.stringify({ res }));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
      { status: 500 }
    );
  }
}
