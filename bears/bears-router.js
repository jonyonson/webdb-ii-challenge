const router = require('express').Router();

const Bears = require('./bears-model.js');

router.get('/', (req, res) => {
  Bears.find()
    .then(bears => {
      res.status(200).json(bears);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  Bears.findById(req.params.id)
    .then(bear => {
      res.status(200).json(bear);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  Bears.add(req.body)
    .then(bear => {
      res.status(201).json(bear);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  Bears.remove(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: 'Bear not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Bears.update(req.params.id, changes)
    .then(updated => {
      if (updated > 0) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Bear not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
