// Import React and required components from Material UI and Ant Design
import React from 'react';

// Material UI components
import { Grid, Card, CardContent, Typography } from '@mui/material';

// Ant Design components
import { Form, Input, Button } from 'antd';

// Import Ant Design styles
import 'antd/dist/reset.css';

// This component creates a grid with 3 cards using Material UI
function CardGrid() {
  // Data for the cards
  const cards = [
    { title: 'Card One', description: 'This is the first card.' },
    { title: 'Card Two', description: 'This is the second card.' },
    { title: 'Card Three', description: 'This is the third card.' },
  ];

  // Return a Material UI Grid container with cards inside
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '2rem' }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card variant="outlined" style={{ height: '100%' }}>
            <CardContent>
              {/* Card title */}
              <Typography variant="h6" gutterBottom>{card.title}</Typography>
              {/* Card description */}
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

// This component creates a feedback form using Ant Design
function FeedbackForm() {
  // Function to handle form submission
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form
      name="feedback"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: 'auto' }}
    >
      {/* Name input */}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>

      {/* Email input */}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Enter a valid email' },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Feedback text area */}
      <Form.Item
        label="Feedback"
        name="feedback"
        rules={[{ required: true, message: 'Please enter your feedback' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      {/* Submit button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

// Main App component renders the title, CardGrid, and FeedbackForm
function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Assignment 3: MUI & Ant  Design
      </h1>

      {/* Show the cards */}
      <CardGrid />

      {/* Show the feedback form */}
      <FeedbackForm />
    </div>
  );
}

export default App;
