import React, { Component } from 'react'
import axios from 'axios';

export default class Education extends Component {
  

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        var img;

        const HandleUpload=(t)=>{
            //console.log(t.handle.files);
           
         
           img = t.target.files[0];
            values.image = img;
          
          }



          const upload = () => {
           
      
           // alert(img);
            if(img)
            {
                var fdata = new FormData();
                fdata.append("Image", img);
               
      
                axios.post('http://localhost:8000/uploadcvpic',fdata)
                .then(res => {
                    
                    //alert(res.data);
                   
              
            
               
            
                  })
                .catch(err=>{alert("ERROR IN UPLOADAXIOS : "+err)});
    
             
      
            }
           
        }
           



        return (

            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>School*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                

                    <br />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                           
                            <hr/>
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Qualification</label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} />
                        </div>

                    </div>
                   
                    
                    <br/>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                        <hr/>
                        </div>
                        <h3><b><i className="fas fa-check-circle mr-1"></i>3</b></h3>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>College/University*</label>
                            <input type="text" name="edu3_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu3_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Year*</label>
                            <input type="text" name="edu3_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu3_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label className='nisa-pd-label'>Qualification*</label>
                            <input type="text" name="edu3_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu3_qualification} onChange={handleChange} required/>
                        </div>

                      
                    </div>
                  



                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button onClick={upload} type="submit" className="btn btn-info">Generate CV<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />

                    

                </form>

            </div>
        )
    }
}
