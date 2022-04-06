import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  // 'https://xmqtnvflhbxnfxnkutji.supabase.co',
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDI3MjQxMywiZXhwIjoxOTU5ODQ4NDEzfQ.5PrHisNbb3ZPKVkE_LJpEj0qmtiOtqhJZDAqggLX_fQ'
  'https://grnrximrjkzzcigdthmu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybnJ4aW1yamt6emNpZ2R0aG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkxMTQ5OTYsImV4cCI6MTk2NDY5MDk5Nn0.mbGKvZHqYQs0mkx_S-YXIdGy3jFZgfiw_AQnVb8Uv7g'
);
