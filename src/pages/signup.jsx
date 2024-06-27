import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
       alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-6xl mx-auto p-8 bg-blue-100 rounded-lg shadow-md">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName" className="block text-lg font-bold text-blue-800 mb-2">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="block w-full px-4 py-2 bg-blue-200 text-gray-800 focus:ring-blue-400"
          placeholder="Enter your first name"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-600 mt-1">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName" className="block mt-4 text-lg font-bold text-blue-800 mb-2">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="block w-full px-4 py-2 bg-blue-200 text-gray-800 focus:ring-blue-400"
          placeholder="Enter your last name"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-600 mt-1">{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email" className="block mt-4 text-lg font-bold text-blue-800 mb-2">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="block w-full px-4 py-2 bg-blue-200 text-gray-800  focus:ring-blue-400"
          placeholder="Enter your email address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 mt-1">{formik.errors.email}</div>
        ) : null}
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
