import './App.css';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function App() {
  const handleRegister = (values) => console.log(values)
  const handleLogin = (values) => console.log(values)

  const validationsLogin = yup.object().shape({
    text: yup
      .string()
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "A senha deve ter pelo menos 5 caracteres")
      .required("Campo obrigatório"),
  });

  const validationsRegister = yup.object().shape({
    text: yup
      .string()
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "A senha deve ter pelo menos 5 caracteres")
      .required("Campo obrigatório"),
  });

  return (
    <div className="container">
        <h1>Cadastre-se</h1>
        <Formik      
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="text" className="form-field" placeholder="Nome" />

            <ErrorMessage
              component="span"
              name="text"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastro
          </button>
        </Form>
        </Formik>


        <h1>Login</h1>
        <Formik      
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="text" className="form-field" placeholder="Nome" />

            <ErrorMessage
              component="span"
              name="text"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
        </Formik>


        
    </div>
  );
}

export default App;
