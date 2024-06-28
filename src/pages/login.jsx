import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-6xl  p-8">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className=" text-lg font-bold">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="block  text-gray-800"
          placeholder="Enter your email address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 mt-1">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password" className=" mt-4 text-lg font-bold ">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="block text-gray-800"
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 mt-1">{formik.errors.password}</div>
        ) : null}
        <button
          type="submit"
          className=" bg-slate-950 text-white  "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
