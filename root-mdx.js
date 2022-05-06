import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Headings,
  Code,
  Blockquote,
  Example,
  PrismSetup,
} from './src/components/Complete'

// const Testing = ({ children }) => {
//   return <code className="code">{children}</code>
// }

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  // h3: () => <span>and you thought you will a h3</span>,
  // h2: () => <h2>title</h2>,
  // h2: props => {
  //   console.log(props)
  //   return <h2 {...props}>{props.children}</h2>
  // },
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

// const myH2 = props => {
//   // console.log(props)
//   if (props.title) {
//     return (
//       <h2 {...props} style={{ fontSize: '2rem', color: 'red' }}>
//         {props.children}
//       </h2>
//     )
//   }
//   return (
//     <h2 {...props} className="code">
//       {props.children}
//     </h2>
//   )
// }
