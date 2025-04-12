import { useReducer, useState } from 'react'

// function reducer (_state, action) {
//   const strategyOBJ = {
//     win: () => {
//       return {
//         status: action.status
//       }
//     },
//     loss: () => {
//       return {
//         status: action.status
//       }
//     },
//     time: () => {
//       return {
//         status: action.status
//       }
//     },
//     none: () => {
//       return {
//         status: action.status
//       }
//     },
//   }

//   strategyOBJ[action.tag]()
// }

export const useOrderBar = (cols) => {
  // const [state, dispatch] = useReducer(reducer, {staus: '', tag: 'none'})
  const [colsSorted, setColsSorted] = useState(cols)

  const orderHandler = (col) => { // função para a pagina controlar - refac
    setColsSorted(prevCols => {
      const newPrevCols = prevCols.map(prevCol => {
        if (prevCol.status === 'ativo') {
          return {
            ...prevCol,
            status: 'inativo'
          }
        }

        if (prevCol.label === col.label) {
          return {
            ...prevCol,
            status: 'ativo'
          }
        }

        return {
          ...prevCol,
          status: 'inativo'
        }
      })

      return newPrevCols;
    })
  }

  return {
    orderHandler,
    colsSorted
  }
}