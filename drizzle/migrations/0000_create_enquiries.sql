CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('admission', 'contact')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  student_name text CHECK (student_name IS NULL OR char_length(student_name) BETWEEN 2 AND 100),
  class_applying text CHECK (class_applying IS NULL OR char_length(class_applying) <= 50),
  mobile text NOT NULL CHECK (mobile ~ '^[6-9][0-9]{9}$'),
  email text CHECK (email IS NULL OR (char_length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  subject text CHECK (subject IS NULL OR char_length(subject) <= 150),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);