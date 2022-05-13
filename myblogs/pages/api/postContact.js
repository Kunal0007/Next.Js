export default function handler(req, res) {
    if (req.method === 'POST'){
        const data = JSON.parse(req.body);
        const { name, email, message } = data;
        const contact = new Contact({
            name,
            email,
            message
        });
        contact.save()
            .then(() => {
                res.status(200).json({
                    message: 'contact saved'
                });
            }
            )
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            }
            );
    }
  }