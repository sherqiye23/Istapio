import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

const validationSchema = Yup.object({
  emailOrUsername: Yup.string()
    .required("Email or Username is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Sign In | Istapio</title>
      </Helmet>
      <div className="min-h-screen bg-slate-50/50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">
              Welcome back to{" "}
              <span className="text-[var(--primary-color)]">Istapio</span>
            </h2>
          </div>

          <Formik
            initialValues={{
              emailOrUsername: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ touched, errors }) => (
              <Form className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email or Username
                  </label>

                  <Field
                    name="emailOrUsername"
                    placeholder="email or username"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.emailOrUsername && errors.emailOrUsername
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="emailOrUsername"
                    component="p"
                    className="text-xs text-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Password
                  </label>

                  <Field
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.password && errors.password
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-xs text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all shadow-sm"
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center text-xs text-slate-500">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </NavLink>
          </p>

          <p className="text-center text-xs">
            <NavLink
              to="/forgot-password"
              className="text-blue-600 font-semibold hover:underline"
            >
              Forgot your password?
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}