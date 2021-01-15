import React from "react";

class Article extends React.Component{

    render(){
        return (
            
            <div className="article">
                <div className="articleImg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Image_du_Maroc_3.jpg" alt=""></img>
                </div>
                <div className="articleText">
                    <div className="textContainer">
                    <h1>Mon premier article</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus scelerisque sem, nec sagittis augue tristique at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi hendrerit tortor eu lectus tempus, id eleifend augue accumsan. Maecenas ac massa mollis, pharetra odio sed, 
                    </p>
                    </div>
                </div>
            </div>
                
        )
    }

}

export default Article