import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      education: user.education,
      skill: user.skill,
      work: user.work
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/second');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: 'First name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should contain only characters.'
              }
            })}
            className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: 'Last name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last name should contain only characters.'
              }
            })}
            className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="education">
          <Form.Label>Educational Detail</Form.Label>
          <Form.Control
            type="text"
            name="education"
            placeholder="Enter Your Degree name"
            autoComplete="off"
            ref={register({
              required: 'Degree name is required.'
            })}
            className={`${errors.degree ? 'input-error' : ''}`}
          />
          {errors.degree && (
            <p className="errorMsg">{errors.degree.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="skill">
          <Form.Label>Skill</Form.Label>
          <Form.Control
            type="text"
            name="skill"
            placeholder="Enter Your Skill"
            autoComplete="off"
            ref={register({
              required: 'Skill name is required.'
            })}
            className={`${errors.skill ? 'input-error' : ''}`}
          />
          {errors.skill && (
            <p className="errorMsg">{errors.skill.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="work">
          <Form.Label>Work Type</Form.Label>
          <Form.Control
            type="text"
            name="work"
            placeholder="Enter Work you want to do"
            autoComplete="off"
            ref={register({
              required: 'Work name is required.'
            })}
            className={`${errors.work ? 'input-error' : ''}`}
          />
          {errors.work && (
            <p className="errorMsg">{errors.work.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;
