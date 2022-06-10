export {}
// import { gql } from "graphql-request"
// import { cmsConnect } from "../../src/utils/cmsConnect"


// // eslint-disable-next-line import/no-anonymous-default-export
// export default async ({ body }: any, res: any) => {
//     console.log(body)

//     const mutation = gql`
//       mutation ($slug: String!) {
//   updateVideo(where: 
//   {slug: $slug}, 
//   data: {seen:true}) {
//     id,
//     title, 
//     seen
//   } 
// }
//     `;

//     const mutationPublish = gql`
//               mutation publishVideo($slug: String) {
//         publishVideo(where: { slug: $slug}, to: PUBLISHED) {
//             slug
//             }
//         }
    
//     `

//     await cmsConnect(mutation, { slug: body.slug });
//     await cmsConnect(mutationPublish, { slug: body.slug })

//     res.status(201).json()
// }