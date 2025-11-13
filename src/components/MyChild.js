import React from "react"
const MyChild = React.memo(function MyFun({onAlert}){
    console.log('Child rendered')
    return (
        <div style={{border:"1px solid green", padding:"10px",marginTop:"10px"}}>
            <h3>Child Component</h3>
            <button onClick={onAlert}>Show Alert</button>
        </div>
    )
})

export default MyChild;