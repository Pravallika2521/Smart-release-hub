exports.combine = (tickets, prs) => {
  const completed = tickets.filter(t => t.status === "Done").length;
  const pending = tickets.length - completed;
 
  const openPRs = prs.filter(p => p.status === "open").length;
 
  return {
    tickets: {
      total: tickets.length,
      completed,
      pending
    },
    prs: {
      total: prs.length,
      open: openPRs
    }
  };
};
