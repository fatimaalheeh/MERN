import React,{useState} from 'react';


const TabsB = (props) => {
    const [tabItems, setTabItems] = useState(props.tabItems);
    
    // const [selectedIdx, setSelectedIdx]=useState(0);
    // if(props.tabItems.length==0){
    //     return "No Tabs";
    // }
    //console.log(props);
    function selectedTab(selectedIdx){
        const updatedTabItems = tabItems.map((tab,i) => {
            if (i=== selectedIdx){
                tab.isSelected=true;
            }
            else{
                tab.isSelected=false;
            }
            return tab;
        });
        setTabItems(updatedTabItems)
    }
    function findSelectedTab(){
        for(let i=0;i<tabItems.length;i++){
            if(tabItems[i].isSelected===true){
                return tabItems[i];
            }
        }
    }

    return (
        <div style={{marginTop:40}}>
            <header>
            {
                tabItems.map((tab,i)=> {
                    const labelStyles ={
                        padding:20,
                        marginRight:10,
                        border:"1px solid grey",
                        width:"150px",
                        
                        
                    }
                    if (tab.isSelected){
                        labelStyles.backgroundColor="black";
                        labelStyles.color="white";
                        labelStyles.height="400px";
                        
                    }
                    return (
                        
                        <span
                    style={labelStyles} key={i} onClick={(e)=>{
                    selectedTab(i);
                    alert( "YOU CLICKED: "+tab.label);
                    
                        
                    }}>
                    {tab.label}
                    </span>
                    );
                })}
            </header>
            <main style={{marginTop:40,border:"1px solid grey",width:"240px",marginRight:"auto",marginLeft:"auto",}}>
                <h3>
                    {
                        findSelectedTab().content
                    }
                </h3>
                {/* with a built-in:  
                <h3>
                    {
                        tabItems.find((tab)=>{return tab.isSelected}).content
                    }
                </h3> */}
                {/* render a specific tab, can use this with routing between pages  
                <h3>
                    <Tab content={props.tabItems[selectedIdx].
                    content}
                </h3> */}

            </main>
        </div>
    )
}

export default TabsB;