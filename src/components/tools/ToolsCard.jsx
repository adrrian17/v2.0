import {
	Box,
	Container,
	LinkBox,
	LinkOverlay,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

import NextLink from 'next/link';

export default function ToolsCard() {
	return (
		<Container maxW={'container.sm'} mx={'auto'} mb={{ base: 6, md: 0 }}>
			<motion.div
				whileHover={{
					scale: 1.05,
				}}
			>
				<LinkBox>
					<Stack
						p={6}
						direction={'row'}
						align={'center'}
						justify={'center'}
						borderColor={'brand.400'}
						borderWidth={3}
						borderRadius={'xl'}
					>
						<Stack align={'center'}>
							<NextLink href="/herramientas" passHref>
								<LinkOverlay>
									<Stack w={'fit-content'}>
										<Text
											fontSize={'xl'}
											fontFamily={'Work Sans'}
											fontWeight={700}
											color={useColorModeValue('gray.800', 'whiteAlpha.900')}
										>
											Herramientas 🛠
										</Text>
									</Stack>
								</LinkOverlay>
							</NextLink>
						</Stack>
					</Stack>
				</LinkBox>
			</motion.div>
		</Container>
	);
}
