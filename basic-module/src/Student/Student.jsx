import propTypes from 'prop-types'
import style from './Student.module.css'

function Student(props){
    return(
        <div className={style.student}>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes": "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
export default Student