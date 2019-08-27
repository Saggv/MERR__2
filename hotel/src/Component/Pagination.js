import React, { Component, Fragment } from 'react';
import {NavLink} from "react-router-dom";
class Pagination extends Component {
    render() {
        const pageNumber=[];

        for(let i=1; i <= Math.ceil(this.props.totalData/this.props.dataPerPage); i++){
                    pageNumber.push(i);
        }

        return (
         <Fragment>
                <nav>
                     <ul className="pagination">
                           <li className='pagination__item'>
                                <NavLink to="#" onClick={()=>this.props.BackOne()} className="pagination__link">>></NavLink>
                           </li>
                              <Fragment>
                                   {
                                       pageNumber.map( (number,value)=>{
                                             return (
                                                <li className='pagination__item' key={value}>
                                                     <NavLink to="#" onClick={()=>this.props.paginate(number)}  className="pagination__link">{number}</NavLink>
                                                 </li>
                                             )
                                       })
                                   }
                              </Fragment>
                           <li className='pagination__item'>
                                <NavLink to="#" className="pagination__link" onClick={()=>this.props.MoveOne()}>>></NavLink>
                           </li>
                     </ul>
                </nav>
         </Fragment>
        );
    }
}

export default Pagination;