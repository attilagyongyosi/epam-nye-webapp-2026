import { useState, useCallback } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HiringInput } from './HiringInput.jsx';
import { HiringSelect } from './HiringSelect.jsx';
import { Field } from '@/components/ui/field';
import { useNavigate } from 'react-router';

export const HiringForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: 'Developer',
    email: '',
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(formData);
      navigate(`/employees`);
      setFormData({
        name: '',
        role: 'Developer',
        email: '',
      });
    },
    [onSubmit, formData, navigate],
  );

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Hire Employee</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <HiringInput
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Zsolt"
              autoComplete="off"
            />
            <HiringSelect
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              options={['Developer', 'Designer']}
            />
            <HiringInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="example@email.com"
              disabled
              onChange={handleChange}
            />
            <Field>
              <Button type="submit">Hire!</Button>
            </Field>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
