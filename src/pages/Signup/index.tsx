import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up | Istapio</title>
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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
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
                    First Name
                  </label>

                  <Field
                    name="firstName"
                    placeholder="John"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.firstName && errors.firstName
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-xs text-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Last Name
                  </label>

                  <Field
                    name="lastName"
                    placeholder="Doe"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.lastName && errors.lastName
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-xs text-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email
                  </label>

                  <Field
                    name="email"
                    type="email"
                    placeholder="john.doe@domain.com"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.email && errors.email
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="email"
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

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Confirm Password
                  </label>

                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none transition-all ${touched.confirmPassword && errors.confirmPassword
                      ? "border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                      }`}
                  />

                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-xs text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all shadow-sm"
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center text-xs text-slate-500">
            Do you have an account?{" "}
            <NavLink
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
