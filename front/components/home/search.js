
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select'

import styles from '../../styles/Search.module.css'


function ButtonsExample(props) {
  return (
    

    <div className={styles.grid}>
        
        
        <h2 className={styles.searchBarLeft} >À partir d'où voit-on</h2>      
        
        <Select 
          
          options={props.places}
          onChange={props.onChangeCallback}
          className={styles.searchSelect}
          classNamePrefix="react-select"
          onSelectResetsInput={false}
          onBlurResetsInput={false}
          />

        <h2 className={styles.searchBarRight}>?</h2>
   

  
    </div>

   
            
     

      

  );
}

export default ButtonsExample;