const connection = require('../database/connection');

module.exports = {

    async index(req, res){

        const [count] = await connection('incidents').count();
        
        /**Armazena no cabeçalho */
        res.header('X-Total-Count', count['count(*)'] );

        const { page = 1 } = req.query;
        const incident = await connection('incidents')
                                .join('ongs','ongs.id','=','incidents.ong_id')
                                .limit(5)
                                .offset((page - 1) * 5)
                                .select(['incidents.*', 
                                            'ongs.name',
                                            'ongs.email',
                                            'ongs.whatsapp',
                                            'ongs.city',
                                            'ongs.uf'
                                        ]);
        return res.json(incident);
    },

    async create(req, res){
        const {title, description, value} = req.body;
        const ong_id = req.headers.authorization;

	    const [id] = await connection('incidents').insert({	
                                        title,
                                        description,
                                        value,
                                        ong_id
									});
	    return res.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization
    
        const incident = await connection('incidents')
          .where('id', id)
          .select('ong_id')
          .first()
    
        if (incident.ong_id !== ong_id) {
          return response.status(401).json({ error: 'Operation not permitted.' })
        }
    
        await connection('incidents').where('id', id).delete()
    
        return response.status(204).send()
      },
    }