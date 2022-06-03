import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import styles from "./CommentsForm.module.css";

const SignupSchema = Yup.object().shape({
  description: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
});

let initialValues = {
  description: "",
};

const CommentsForm = ({ onSubmit, closeModal, initialData = null }) => {
    const onFormSubmit = (values, {resetForm}) => {
        onSubmit(values);
        closeModal();
        resetForm({});
    }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialData || initialValues}
        validationSchema={SignupSchema}
        onSubmit={onFormSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field
              as="textarea"
              name="description"
              autoComplete="off"
              placeholder="Description"
              className={classNames(styles.field)}
            />
            {errors.description && touched.description ? (
              <div className={styles.errors}>{errors.description}</div>
            ) : null}

            <button className={styles.button} type="submit">
              {initialData ? "Edit Comment" : "Add Comment"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CommentsForm;
