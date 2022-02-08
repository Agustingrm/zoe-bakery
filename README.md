# Zoe Bakery

This website contains different elements that I learned in different courses throughout my studies in programming. With a minimalist structure, it is divided into 5 basic tabs

- **Home Page:** This tab is easily controllable from the CMS used. In it you have as an example the bakers that are working at the moment and the cakes that are available for immediate purchase in the store.
- **Cakes Page:** This tab has the information of all the cakes that the bakery bakes. Through GraphQL and Gatsby a filter was made and is located at the top. This filter allows the selection of an ingredient to display all the cakes that contain that ingredient. In this tab you can also access the individual tab of each cake where you can obtain additional information about them.
- **Coffe Page:** The coffee tab is extracted from an external API, and then used in gatsby-node. This allows it to be requested only in the build and then used through GraphQL where needed.
- **Bakers Page:** As with the cakes, this tab allows you to see a visualization of all the bakers that are working in the company. This page also has a pagination, to show only a certain number of people per page. In this tab you can also access the individual tab of each employee where you can obtain additional information about them.
- **Orders Page:** This tab lists all the cakes in two sizes so that a customer can pre-order any of them. Once the purchase is made, entering name and email, the customer can pick it up in 24h and pay at the store. 
The order is sent through Nodemailer, sending a copy to the customer and one to the employees of the store so they can fulfill the order.

## Language and Technologies Employed

- The site was entirely built in **Gatsby**, using different functionalities of this tool, such as pluggins and templates. Also for sending mails it was used a **Serverless Function**, which is hosted in Netlify.
- For the styling of the page it was used **Styled Components** as a Gatsby pluggin.
- The **SEO** optimization of this site was done through the **Helmet** pluggin. 
- A headless CMS, **Sanity**, was used for image and information management.
- **GraphQL** was used to query the information
