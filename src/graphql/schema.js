export const typeDefs = `
  schema {
    query: Query
  }

  type ExportModal {
    isOpen: Boolean
  }

  type Mutation {
    toggleExportModal (isOpen: string): ExportModal
  }

  type Query {
    isExportModalOpen (): ExportModal
  }
`;
