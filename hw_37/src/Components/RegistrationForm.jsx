import { useFormik } from 'formik';
import {registrationSchema} from "../schema/schema.js"

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
}

const RegistrationForm = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} autoComplete='off'>
      <div>
        <label className='block text-gray-700 text-sm font-bold mb-2" for="username' htmlFor='name'>Name</label>
        <input 
          value={values.name}
          onChange={handleChange}
          id='name'
          type='name'
          placeholder='Enter your name'
          onBlur={handleBlur}
          className={['shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.name && touched.name ? "inpur-error" : ""].join(' ')}
        />
      </div>
      {errors.name && touched.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}
      <div>
      <label className='block text-gray-700 text-sm font-bold mb-2" for="username' htmlFor='email'>Email</label>
      <input 
        value={values.email}
        onChange={handleChange}
        id='email'
        type='email'
        placeholder='Enter your email'
        onBlur={handleBlur}
        className={['shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.email && touched.email ? "inpur-error" : ""].join(' ')}
      />
      </div>
      {errors.email && touched.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
      <div>
      <label className='block text-gray-700 text-sm font-bold mb-2" for="username' htmlFor='phone'>Phone</label>
      <input 
        value={values.phone}
        onChange={handleChange}
        id='phone'
        type='phone'
        placeholder='Enter your phone'
        onBlur={handleBlur}
        className={['shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', errors.phone && touched.phone ? "inpur-error" : ""].join(' ')}
      />
      </div>
      {errors.phone && touched.phone && <p className='text-red-500 text-xs italic'>{errors.phone}</p>}
      <button disabled={isSubmitting} className="block my-0 mx-auto mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </form>
  )

  };
  
export default RegistrationForm;