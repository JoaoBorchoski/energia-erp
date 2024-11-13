import { Box, Modal } from "@mui/material"

export default function AppModal({ children, open, setClose, width, maxHeight }: any) {
  return (
    <Modal open={open} onClose={() => setClose(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          width: width,
          maxHeight: maxHeight || "80vh",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Modal>
  )
}
