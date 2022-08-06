import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function Newslettter(props) {
    return (

        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">Subscribe To Our Newsletter</span>
            </div>
            <div className="text-700 text-sm mb-6">
            Be the first to know about rewards, new offers, new features  and more.
            </div>
            <div className="grid justify-content-center">
                <div className="col-12 md:col-6 mb-4 px-5">
                        <div className="p-inputgroup">
                            <InputText className='surface-400' placeholder="Enter your email address"/>
                            <Button className="p-button-primary" label='Subscribe'/>
                        </div>
                </div>
             
            </div>
        </div>


    );
}

export default Newslettter;