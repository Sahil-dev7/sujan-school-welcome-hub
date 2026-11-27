DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.enquiries;

CREATE POLICY "Valid enquiry submissions only"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  (
    kind = 'admission'
    AND name = btrim(name)
    AND char_length(name) BETWEEN 2 AND 100
    AND student_name IS NOT NULL
    AND student_name = btrim(student_name)
    AND char_length(student_name) BETWEEN 2 AND 100
    AND class_applying IN (
      'Pre-Primary (Nursery / KG)',
      'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
      'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
      'Class XI', 'Class XII'
    )
    AND mobile = btrim(mobile)
    AND mobile ~ '^[6-9][0-9]{9}$'
    AND (
      email IS NULL
      OR (
        email = btrim(email)
        AND char_length(email) <= 255
        AND email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
      )
    )
    AND (message IS NULL OR (message = btrim(message) AND char_length(message) <= 1000))
    AND subject IS NULL
  )
  OR
  (
    kind = 'contact'
    AND name = btrim(name)
    AND char_length(name) BETWEEN 2 AND 100
    AND mobile = btrim(mobile)
    AND mobile ~ '^[6-9][0-9]{9}$'
    AND (
      email IS NULL
      OR (
        email = btrim(email)
        AND char_length(email) <= 255
        AND email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
      )
    )
    AND student_name IS NULL
    AND class_applying IS NULL
    AND subject IS NOT NULL
    AND subject = btrim(subject)
    AND char_length(subject) BETWEEN 3 AND 150
    AND message IS NOT NULL
    AND message = btrim(message)
    AND char_length(message) BETWEEN 10 AND 2000
  )
);