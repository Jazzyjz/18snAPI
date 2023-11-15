
// api/thoughts/:thoughtID/reactions
router.route('/:thoughtID/reactions').post(createReaction);

// api/thoughts/:thoughtID/reactions/:reactionID
router.route('/:thoughtID/reactions/:reactionID').delete(deleteReaction);

module.exports = router;