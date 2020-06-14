import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import readXlsxFile from 'read-excel-file'


function MyDropzone(props) {
    const schema= {
        'Plus 1':{
            prop:'plus',
            type: String
        },
        'First Name':{
            prop: 'firstName',
            type: String
        },
        'Last Name':{
            prop: 'lastName',
            type: String
        }
        
    }
  //   const add= ()=>{
    
  //     client.auth.loginWithCredential(new AnonymousCredential()).then(data=>{
  //     db.collection('guest').find({}).then((Response)=>{
  //       console.log(Response)
  //       // data=>{console.log(data)}
  //     }).then(()=>{
  //         db.collection('guest').findOne({name:'christian'}).then(data=>{
  //           console.log(data)
  //         })
  //       })
  //  })
  //   }
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        readXlsxFile(binaryStr,{schema}).then((rows,error) => {
          
          console.log(rows,error)
          props.add(rows)
          // console.log(props.add)
        })
      }
      reader.readAsArrayBuffer(file)
    })
    console.log(acceptedFiles)
    // readXlsxFile(acceptedFiles,{schema}).then((rows,error) => {
        //       // `rows` is an array of rows
        //       console.log(rows,error)
        // console.log(rows, error)
        //       // each row being an array of cells.
            // })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}
export default MyDropzone