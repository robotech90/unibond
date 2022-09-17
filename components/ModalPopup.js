import { Formik, Form, Field } from "formik";
import styles from "scss/components/OrderForm.module.scss";
import * as Yup from "yup";

const AuditCompletedSchema = Yup.object().shape({
    bugges: Yup.string().required("Bugges is required"),
    marketcap: Yup.string().required("Market cap is required")
});

const ModalPopup = ({ submitHandler, setShowPopup, selectedRow }) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Formik
                                    initialValues={{
                                        bugges: '',
                                        marketcap: ''
                                    }}
                                    validationSchema={AuditCompletedSchema}
                                    onSubmit={(values) => {
                                        submitHandler(values, 'Completed');
                                    }}
                                >
                                    {(formik) => {
                                        const { errors, touched, isValid, dirty } = formik;
                                        return (
                                            <Form id="myform">
                                                <div className={styles.inputsContainer}>
                                                    <div>
                                                        <label className={styles.label} htmlFor="bugges">Total Bugges</label>
                                                        <Field type="text" name="bugges" className={`${errors.bugges && touched.bugges ? 
                                                            styles['input-error'] : null} ${styles.input}`} id="bugges" placeholder="" />
                                                    </div>
                                                    <div>
                                                        <label className={styles.label} htmlFor="marketcap">Total Market Cap</label>
                                                        <Field type="text" name="marketcap" className={`${errors.marketcap && touched.marketcap ? 
                                                            styles['input-error'] : null} ${styles.input}`} id="marketcap" placeholder="" />
                                                    </div>
                                                </div>
                                            </Form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" form="myform">Submit</button>
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={()=>setShowPopup(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;
