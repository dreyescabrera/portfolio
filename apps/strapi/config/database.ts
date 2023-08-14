import { join } from 'path'

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
				filename: join(__dirname, '..', '..', '.tmp/data.db'),
			useNullAsDefault: true,
    },
    }
})
