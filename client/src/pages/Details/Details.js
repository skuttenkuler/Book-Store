// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import API from "../../utils/API";

// const Detail = (props) => {
   
//   var {id}  = useParams();

//   const [state, dispatch] = useStoreContext();

//   useEffect(() => {
//     loadDetails();
//   }, []);

//   function loadDetails() {
//     API.getDetails(id)
//     .then(results => {
//       dispatch({type: "loadFavs", books: [results.data] });
//     });
//   }

//   function handleClick() {
//     API.deleteBook(id)
//     .then(() => {
//       return props.history.push('/favorites');
//     });
//   }

//   return (
//     <div className="container">
//         <div className="row">
//           <div className="col-12">
//                 {state.map(book => {
//                     return (

//                       <div key={book._id}>

//                         <div className="jumbotron text-center">
//                           <div className="container">
//                             <h1 className="display-4">{book.title}</h1>
//                             <p className="lead">{book.authors}</p>
//                             <p>
//                               <a href={book.link} target="_blank" className="btn btn-primary">View on Google</a>
//                               <a href="/saved" className="btn btn-primary">Back to Saved</a>
//                               <a href="#" className="btn btn-danger" onClick={handleClick}>Remove Book</a>
//                             </p>
//                           </div>
//                         </div>

//                         <p>
//                           <img src={book.image} alt={book.title} className="float-left mr-3"/>
//                           {book.description}
//                         </p>

//                       </div>
//                     );
//                 })}

//           </div>
//         </div>
//     </div>
//   );
// };

// export default Detail;