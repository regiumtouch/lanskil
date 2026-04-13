import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yzhoheziumxgotllemhg.supabase.co";
const supabaseKey = "sb_publishable_K8qcVNFz_ZDNvtbnCqkEfw_DH0Aew3s";

export const supabase = createClient(supabaseUrl, supabaseKey);
