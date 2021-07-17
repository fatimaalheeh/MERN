
import React,{useState} from 'react';


const Tabs = (props) => {
    const [selectedIdx, setSelectedIdx]=useState(0);
    var bgc="White";
    var c = "black";
    // if(props.tabItems.length==0){
    //     return "No Tabs";
    // }
    //console.log(props);

    return (
        <div style={{marginTop:40}}>
            <header>
            {
                props.tabItems.map((tab,i)=> {
                    const labelStyles ={
                        padding:20,
                        marginRight:10,
                        border:"1px solid grey",
                        width:"150px",
                        
                        
                    }
                    if (selectedIdx===i){
                        labelStyles.backgroundColor="black";
                        labelStyles.color="white";
                    }
                    
                    return (
                        <span
                    style={labelStyles}
                    key={i}
                    onClick={(e)=>{
                        setSelectedIdx(i);
                        props.tabItems[i].callback();
                        
                    }}>
                    {tab.label}
                    </span>
                    );
                })}
            </header>
            <main style={{marginTop:40,border:"1px solid grey",width:"240px",marginRight:"auto",marginLeft:"auto",}}>
                <h3>{props.tabItems[selectedIdx].content}</h3>
            </main>
        </div>
    )
}

export default Tabs;