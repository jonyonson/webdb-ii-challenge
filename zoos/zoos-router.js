const router = require('express').Router();

const Zoos = require('./zoos-model.js');

router.get('/', (req, res) => {
  Zoos.find()
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  Zoos.findById(req.params.id)
    .then(zoo => {
      res.status(200).json(zoo);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  Zoos.add(req.body)
    .then(zoo => {
      res.status(201).json(zoo);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  Zoos.remove(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: 'Zoo not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Zoos.update(req.params.id, changes)
    .then(updated => {
      if (updated > 0) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Zoo not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
