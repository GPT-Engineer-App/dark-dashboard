import React from 'react';
import { Box, Flex, Text, Input, Icon, VStack, SimpleGrid } from '@chakra-ui/react';
import { FaSearch, FaWallet, FaClipboardList, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="#1E1E2D" p="20px" minH="100vh" fontFamily="Arial, sans-serif">
      <Flex>
        {/* Sidebar */}
        <Box w="80px" bg="#14141B" p="20px" borderRadius="20px 0 0 20px">
          <VStack spacing="20px">
            <Icon as={FaWallet} boxSize="24px" color="white" _hover={{ transform: 'scale(1.1)', color: 'gray.300' }} />
            <Icon as={FaClipboardList} boxSize="24px" color="white" _hover={{ transform: 'scale(1.1)', color: 'gray.300' }} />
            <Icon as={FaUsers} boxSize="24px" color="white" _hover={{ transform: 'scale(1.1)', color: 'gray.300' }} />
          </VStack>
        </Box>

        <Box flex="1" ml="20px">
          {/* Header */}
          <Flex h="60px" bg="#14141B" p="20px" align="center" justify="space-between">
            <Input
              placeholder="Search..."
              w="300px"
              h="40px"
              bg="#2E2E3D"
              borderRadius="20px"
              px="20px"
              fontSize="14px"
              color="white"
            />
            <Icon as={FaSearch} color="white" ml="10px" />
          </Flex>

          {/* Main Content */}
          <Box p="20px">
            {/* Greeting Section */}
            <Text
              fontSize="24px"
              fontWeight="bold"
              color="white"
              mb="20px"
              lineHeight="32px"
              _hover={{ fontSize: "56px" }}
            >
              Welcome to the Dashboard
            </Text>

            {/* Statistics Cards */}
            <SimpleGrid columns="auto-fill" minChildWidth="250px" spacing="20px" mb="20px">
              <Box w="250px" h="150px" bg="#00C4B4" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="#333333" mb="10px" lineHeight="24px">
                  Weekly Balance
                </Text>
                <Text fontSize="14px" fontWeight="normal" color="#666666" lineHeight="20px">
                  $5,000
                </Text>
              </Box>
              <Box w="250px" h="150px" bg="#FFEB3B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="#333333" mb="10px" lineHeight="24px">
                  Orders In Line
                </Text>
                <Text fontSize="14px" fontWeight="normal" color="#666666" lineHeight="20px">
                  15
                </Text>
              </Box>
              <Box w="250px" h="150px" bg="#FFCDD2" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="#333333" mb="10px" lineHeight="24px">
                  New Clients
                </Text>
                <Text fontSize="14px" fontWeight="normal" color="#666666" lineHeight="20px">
                  8
                </Text>
              </Box>
            </SimpleGrid>

            {/* Grid Container for Main Sections */}
            <SimpleGrid columns="auto-fill" minChildWidth="250px" spacing="20px">
              {/* Sales Chart */}
              <Box w="100%" h="300px" bg="#14141B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                  Sales Chart
                </Text>
                <Box h="200px" w="100%" bg="gray.700" />
              </Box>

              {/* Calendar */}
              <Box w="100%" h="300px" bg="#14141B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                  Calendar
                </Text>
                <Box h="200px" w="100%" bg="gray.700" />
              </Box>

              {/* Pie Chart and Details */}
              <Box w="100%" h="300px" bg="#14141B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                  Pie Chart
                </Text>
                <Box h="150px" w="150px" bg="gray.700" mb="20px" />
                <Text fontSize="14px" color="white">
                  Details about the pie chart.
                </Text>
              </Box>

              {/* Weekly Sales Bar Chart */}
              <Box w="100%" h="150px" bg="#14141B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                  Weekly Sales
                </Text>
                <Box h="100px" w="100%" bg="gray.700" />
              </Box>

              {/* Customer Details */}
              <Box w="100%" h="150px" bg="#14141B" borderRadius="10px" p="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                  Customer Details
                </Text>
                <Box h="30px" w="100%" bg="gray.700" />
              </Box>
            </SimpleGrid>
          </Box>

          {/* Footer */}
          <Flex h="40px" bg="#14141B" p="10px 20px" align="center" justify="center">
            <Text fontSize="12px" color="gray.500">
              © 2023 Dashboard. All rights reserved.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;