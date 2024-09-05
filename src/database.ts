import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://caio_7fgc_user:8S0x6PsTLmQvk8DPGa13B72QvFTk1ISb@dpg-crcedc52ng1s739rrsdg-a.oregon-postgres.render.com/caio_7fgc";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
