import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./DataForm.module.css";
import classNames from "classnames";

const SignupSchema = Yup.object().shape({
  size: Yup.object().shape({
    width: Yup.number().min(1, "Too Short!").required("Required"),
    height: Yup.number().min(1, "Too Short!").required("Required"),
  }),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  count: Yup.number().min(1, "Too Short!").required("Required"),
  weight: Yup.string().min(1, "Too Short!").required("Required"),
});

let initialValues = {
  name: "",
  count: "",
  size: {
    width: "",
    height: "",
  },
  weight: "",
};

const DataForm = ({ onSubmit, closeModal, initialData = null }) => {
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
              name="name"
              autoComplete="off"
              placeholder="Name"
              className={classNames(styles.field, {[styles.invalid]:(errors.name && touched.name)})}
            />
            {errors.name && touched.name ? (
              <div className={styles.errors}>{errors.name}</div>
            ) : null}
            <Field
              name="count"
              autoComplete="off"
              placeholder="Count"
              className={classNames(styles.field, {[styles.invalid]:(errors.count && touched.count)})}
            />
            {errors.count && touched.count ? (
              <div className={styles.errors}>{errors.count}</div>
            ) : null}
            <Field
              name="size.width"
              autoComplete="off"
              placeholder="Width"
              className={classNames(styles.field, {[styles.invalid]:(errors.size && touched.size)})}
            />
            {errors.size && touched.size ? (
              <div className={styles.errors}>{errors.size.width}</div>
            ) : null}
            <Field
              name="size.height"
              autoComplete="off"
              placeholder="Height"
              className={classNames(styles.field, {[styles.invalid]:(errors.size && touched.size)})}
            />
            {errors.size && touched.size ? (
              <div className={styles.errors}>{errors.size.height}</div>
            ) : null}
            <Field
              name="weight"
              autoComplete="off"
              placeholder="Weight"
              className={classNames(styles.field, {[styles.invalid]:(errors.weight && touched.weight)})}
            />
            {errors.weight && touched.weight ? (
              <div className={styles.errors}>{errors.weight}</div>
            ) : null}
            <button className={styles.button} type="submit">
              {initialData ? "Edit" : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DataForm;
