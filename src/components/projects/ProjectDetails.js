import React from 'react';

const ProjectDetails = (props)=> {
    //console.log(props);
    const id = props.match.params.id;
  return (
     <div className="container section project-details">
         <div className="card z-depth-0">
             <div className="card-content">
  <span className="card-title">Project Title -{id}</span>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Facilis dolores officia, unde numquam sequi veniam beatae asperiores nulla natus,
                      ducimus quasi molestiae quo tenetur quidem,
                      culpa doloremque assumenda rem corporis!</p>
             </div>
             <div className="card-action grey lighten-4 grey-text">
                 <div>Posted By The Net Ninja</div>
                 <div>2nd September 2020</div>
             </div>
         </div>
     </div>
  )

}

export default ProjectDetails;
