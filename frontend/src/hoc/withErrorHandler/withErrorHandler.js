import React,{ Component } from 'react';
import Aux from '../Auxillary';
import Modal from '../../component/UI//Modal/Modal';

const withErrorHandler = ( WrappedComponent , axios )=>{
    // console.log(this.props);

    return class extends Component{
        state = {
            error : null
        }

        componentWillMount(){
            // console.log("DidMount");
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({error : null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res , error => {
                this.setState({error : error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = ()=>{
            this.setState({error :null});
        }

        render(){
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    removed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent/>
                </Aux>
            )
        }   
    }
}

export default withErrorHandler;